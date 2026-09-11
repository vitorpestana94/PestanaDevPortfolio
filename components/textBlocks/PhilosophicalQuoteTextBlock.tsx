export default function PhilosophicalQuoteTextBlock({ quote, reference } : { quote: string, reference:string }){
    return (
        <blockquote className="px-5 py-2 nasaBorder flex flex-col gap-y-2 self-end mt-auto my-2">
            <p className="homeParagraph">
                {`"${quote}"`}
            </p>
            <p  className="homeParagraph self-end">
                {`— ${reference}`}
            </p>
        </blockquote>
    )
}