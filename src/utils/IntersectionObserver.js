import { useState, useEffect } from "react"

function useIntersectionObserver( ref, options )
{
    const [ entry, setEntry ] = useState(null);

    useEffect( () => {
        const element = ref?.current;
        var observer = new IntersectionObserver( ([entry]) => setEntry( entry ), options);
        observer.observe( element );
        return observer.disconnect;
    }, [ref] );

    return entry;
}

export default useIntersectionObserver;