import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import { StorageKeys, UTM_expiry_days } from "../../configs/constants";
const _ = require('lodash');

function GetGoogleAnalyticsParamsFromQuery(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [utm_source, setUtmSource] = useState('');
    const [utm_medium, setUtmMedium] = useState('');
    const [utm_campaign, setUtmCampaign] = useState('');
    const [utm_id, setUtmId] = useState('');
    const [utm_content, setUtmContent] = useState('');

    const setOtherParamsfromQuery = () => {
        const params = [];
        for(let entry of searchParams.entries()) {
            if(!(entry[0] === "utm_source" ||
                entry[0] === "utm_medium" ||
                entry[0] === "utm_campaign" ||
                entry[0] === "utm_id" ||
                entry[0] === "utm_content")
            ) {
                params.push({key: entry[0], value: entry[1]});
            }
        }
        return params
    }

    const setParamsFromQuery = async () => {
        setUtmSource(searchParams.get('utm_source'));
        setUtmMedium(searchParams.get('utm_medium'));
        setUtmCampaign(searchParams.get('utm_campaign'));
        setUtmId(searchParams.get('utm_id'));
        setUtmContent(searchParams.get('utm_content'));
    }

    const setParamsFromLocalStorage = () => {
        setUtmSource(JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).utm_source);
        setUtmMedium(JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).utm_medium);
        setUtmCampaign(JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).utm_campaign);
        setUtmId(JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).utm_id);
        setUtmContent(JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).utm_content);
    }

    useEffect(()=> {
        if(searchParams.get('utm_source') 
        || searchParams.get('utm_medium')
        || searchParams.get('utm_campaign')
        || searchParams.get('utm_id')
        || searchParams.get('utm_content'))  {
            // if there are params present on the query string
            setParamsFromQuery();
        } else {
            // if there are not params present on the query string
            // check local storage
            // check if the time is less than 28 days
            if(localStorage.getItem(StorageKeys.UTM_PARAMS) && JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).time) {
                const storedTime = JSON.parse(localStorage.getItem(StorageKeys.UTM_PARAMS)).time
                if(Date.now()<storedTime) {
                    setParamsFromLocalStorage()
                } else {
                    console.log("Expired");
                }
            }
        }
    }, [])

    useEffect(()=> {
        if(searchParams.get('utm_source') 
        || searchParams.get('utm_medium')
        || searchParams.get('utm_campaign')
        || searchParams.get('utm_id')
        || searchParams.get('utm_content')) {
            // only set the local storage if all the params are available
            localStorage.setItem(StorageKeys.UTM_PARAMS, JSON.stringify({
                'time': new Date(new Date().getTime()+(UTM_expiry_days*24*60*60*1000)).getTime(),
                utm_source,
                utm_medium,
                utm_campaign,
                utm_id,
                utm_content,
            }))
        }
    }, [utm_source, utm_campaign, utm_medium, utm_id, utm_content])
    
    return { utm_source, utm_medium, utm_campaign, utm_id, utm_content, setOtherParamsfromQuery}
}

export default GetGoogleAnalyticsParamsFromQuery;