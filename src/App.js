import * as React from 'react';
import useCarousel from 'react-zippy-carousel';

const width = 300;

const App = () => {
  const carouselContainerRef = React.useRef();
  const {
    handlers,
    listHandlers,
    offset,
    withAnimation,
    slideNext,
    slidePrev,
    slides
  } = useCarousel({
    list: ['#98ddca', '#d5ecc2', '#ffd3b4', '#ffaaa7'],
    carouselContainerRef,
  });

  return (
    <>
      <p>
        <button onClick={slideNext}>NEXT</button>
        <button onClick={slidePrev}>PREV</button>
      </p>

      <div ref={carouselContainerRef} {...handlers} style={{ width: width, height: width, display: 'flex', overflow: 'hidden', margin: '0 auto', position: 'relative' }} className="App">
        <ul {...listHandlers} style={{
          display: 'flex', flexWrap: 'nowrap', listStyle: 'none', padding: 0, margin: 0,

          transitionDuration: !withAnimation ? '0s' : '0.5s',
          transform: `translate3d(${offset * -1}px, 0, 0)`,
        }}>
          {
            slides.map((i) => (<li key={i} style={{ display: 'flex', height: width, width: width, background: i }}>{JSON.stringify(i)}</li>))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
