import React, { useRef, useEffect } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useMenuOutsideAlerter(ref, props) {
  const {SetShowmenu} = props;

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // Update our menu
        SetShowmenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function MenuOutsideAlerter(props) {
    //console.log(props);
    const wrapperRef = useRef(null);
    useMenuOutsideAlerter(wrapperRef, props);
  
    return <div ref={wrapperRef}>{props.children}</div>;
}