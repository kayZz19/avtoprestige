function DocumentCard({ title, file }) {
  return (
    <div className="documentsCard">
      <h3 className="documentsTitle">{title}</h3>

      <object
        data={file}
        type="application/pdf"
        className="pdf"
      >
        <a href={file}>Скачать PDF</a>
      </object>
    </div>
  );
}

export default DocumentCard;