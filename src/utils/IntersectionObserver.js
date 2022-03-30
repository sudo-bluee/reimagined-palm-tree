import { useState, useEffect, useRef } from "react"

function useIntersectionObserver( ref, options, onceOnly )
{
    const [ entry, setEntry ] = useState();
    useEffect( () => {
        const element = ref?.current;
        let observer = new IntersectionObserver( ([e]) => 
        {
            setEntry( e )
            if(e.isIntersecting && onceOnly)
            {
                observer.unobserve( element );
            } 
        }, options);

        observer.observe( element );
        
        return () => observer.disconnect();
    }, [ref] );

    return entry;
}

export default useIntersectionObserver;