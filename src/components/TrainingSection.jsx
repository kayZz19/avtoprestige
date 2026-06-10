import ImageCarousel from "./ImageCarousel";

function TrainingSection({
  title,
  items,
  images,
  quote,
  author,
  showQuoteIcon,
}) {
  return (
    <section className="training">
      <div className="class-room">
        <h3 className="heading">{title}</h3>

        {items.map((item, index) => (
          <div className="numbering" key={index}>
            <span className="circle-number">{index + 1}</span>

            <span className="text-numbering">{item}</span>
          </div>
        ))}
      </div>

      <ImageCarousel images={images} />

      <div className="quote">
        <div className="illustration">
          {showQuoteIcon && <div className="quote-icon">❝</div>}

          <div className="vertical-line" />

          <div className="quote-text">
            <p>{quote}</p>

            {author && <p>{author}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingSection;
