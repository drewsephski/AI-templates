'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';

export default function Demo() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center my-20">
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
                    "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
                    "blur-[30px]"
                )}
            />

            <div className="flex w-[70vw] flex-col items-end">
                <WavePath className="mb-20" />
                <div className="flex w-full flex-col items-end">
                    <div className="flex justify-end">
                        <p className="text-muted-foreground mt-2 text-sm font-sans">World of Art</p>
                        <p className="text-foreground/80 ml-8 w-3/4 text-2xl md:text-4xl font-sans">
                            Experience the emotions of artists through their works. Let the
                            beauty of art inspire you and fill your soul.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}