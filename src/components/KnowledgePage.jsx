import Header from "../components/Header";
import TrainingSection from "../components/TrainingSection";

import knowledgeData from "../data/knowledgeData";

function KnowledgePage() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <h2 className="title">Площадка знаний</h2>

        {knowledgeData.map((section, index) => (
          <div key={section.id}>
            <TrainingSection {...section} />

            {index !== knowledgeData.length - 1 && <div className="line" />}
          </div>
        ))}
      </main>
    </div>
  );
}

export default KnowledgePage;
