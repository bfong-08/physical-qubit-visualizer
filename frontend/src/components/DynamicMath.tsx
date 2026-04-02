"use client"

import { useEffect, useRef } from "react"
import katex from "katex"
import "katex/dist/katex.min.css";

interface DynamicMathProps {
    expression: string;
}

const DynamicMath = ({ expression }: DynamicMathProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            try {
                katex.render(expression, containerRef.current, {
                    throwOnError: true,
                    errorColor: '#cc0000'
                })
            } catch (e) {
                console.error("KaTeX rendering error: ", e);
                containerRef.current.innerHTML = `<span style="color: #cc0000;">${expression}</span`;
            }
        }
    }, [expression]);

    return <div className="my-4" ref={containerRef}/>
}

export default DynamicMath