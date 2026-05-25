import {Link} from "react-router";

type SectionHeaderProps = {
    title: string
    url: string
}

function SectionHeader( { title, url }: SectionHeaderProps  ) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-2xl font-semibold text-stone-800">{title}</h2>
            {url && (
                <Link to={url} className="text-sm text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors">
                    See More <span>→</span>
                </Link>
            )}
        </div>
    )
}
export default SectionHeader;