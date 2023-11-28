import Tabbed from "./Tabbed/Tabbed";

const content = [
    {
        details:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.",
    },
    {
        details:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
        details:
            "The default WooCommerce Additional Information tab is primarily used to display extra details about products such as the weight, dimensions, and other custom product attributes.",
    },
];
const NavTab = () => {
    return (
        <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-12">
            <Tabbed content={content}/>
        </div>
    )
}

export default NavTab
