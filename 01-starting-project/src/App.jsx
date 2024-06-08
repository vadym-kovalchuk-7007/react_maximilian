import { useEffect, useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept';
import ExampleDesc from './components/ExampleDesc/ExampleDesc';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selectedTopic, setTabContent] = useState();

  useEffect(() => {
    console.log(`selectedTopic is changed: ${selectedTopic}`);
  });
  let currentExample;
  setCurrentExample(selectedTopic);

  function setCurrentExample(tab) {
    currentExample = EXAMPLES[tab];
  }
  function handleSelect(tab) {
    setCurrentExample(tab);
    setTabContent(tab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {[
              { topic: 'components', value: 'Components' },
              { topic: 'jsx', value: 'JSX' },
              { topic: 'props', value: 'Props' },
              { topic: 'state', value: 'State' },
            ].map((btn) => {
              const topic = btn.topic;
              return (
                <TabButton
                  key={topic}
                  isSelected={selectedTopic === topic}
                  onSelect={() => handleSelect(topic)}
                >
                  {btn.value}
                </TabButton>
              );
            })}
            {/* <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            */}
          </menu>
          {currentExample ? (
            <ExampleDesc
              {...{
                title: currentExample['title'],
                description: currentExample['description'],
                code: currentExample['code'],
              }}
            />
          ) : (
            <p>Please, select tab</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
