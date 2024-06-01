import { useState } from "react";

export default function Gallery({ images, category }: { images: string[], category: any }) {
    const [ bigImage, setBigImage ] = useState<string>(images[0]);
    const handleHover = (e: any) => {
        setBigImage(e.target.src.split("/").pop());
    }

    return (
        <div className="flex flex-row gap-2 shrink-0 items-end">
            <img src={`/images/${category.id}/${bigImage}`} alt="" className="w-[400px] rounded-md" />
            <div className="flex flex-col gap-2">
                <img onMouseEnter={(e) => handleHover(e)} onMouseLeave={() => setBigImage(images[0])} src={`/images/${category.id}/${images[1]}`} alt="" className="w-12 h-12 rounded-md" />
                <img onMouseEnter={(e) => handleHover(e)} onMouseLeave={() => setBigImage(images[0])} src={`/images/${category.id}/${images[2]}`} alt="" className="w-12 h-12 rounded-md" />
            </div>
        </div>
    )
}