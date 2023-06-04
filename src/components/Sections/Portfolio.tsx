/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import Image from 'next/image';
import {FC, memo, useEffect, useMemo, useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const memoizedPortfolioItems = useMemo(
    () =>
      portfolioItems.map((item, index) => {
        const {title, image, description, tags, url, source} = item;
        return (
          <div key={`${title}-${index}`}>
            <div className="container mx-auto px-4 sm:px-8">
              <div className="bg-gray-100">
                <div className="space-y-4 rounded-lg lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-5">
                  <a className="group" href={url} target="_blank" title="project link">
                    <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-150 lg:shadow-xl">
                      <Image alt="Featured Photo" className="rounded-lg object-cover shadow-lg " src={image} />
                    </div>
                  </a>
                  <div className="sm:col-span-2">
                    <div className="flex h-full flex-col justify-between">
                      <div className="mb-4">
                        <div className="flex flex-wrap space-x-2 ">
                          {tags.map((tag, index) => (
                            <span
                              className="text-skin-inverted border-skin-input mb-2 inline-flex items-center rounded-full border-4 border-gray-200 px-2.5 py-1.5 text-sm font-medium leading-none"
                              key={`${tag}-${index}`}>
                              <svg className="brand-react mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-skin-inverted group-hover:text-skin-primary font-sans text-lg font-semibold leading-6">
                          {title}
                        </h4>

                        <p className="text-skin-base mt-1 text-sm font-normal leading-5">{description}</p>
                      </div>
                      <div className="flex space-x-2 ">
                        <div className="mb-4 mt-4">
                          <span className="text-skin-inverted border-skin-input inline-flex items-center rounded-full border border-2 border-orange-500 px-2.5 py-1.5 text-sm font-medium leading-none">
                            <svg className="brand-react mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3"></circle>
                            </svg>
                            <a className="group" href={url} target="_blank">
                              View Live
                            </a>
                          </span>
                        </div>
                        <div className="mb-4 mt-4">
                          <span className="text-skin-inverted border-skin-input inline-flex items-center rounded-full border-2 border-orange-500 px-2.5 py-1.5 text-sm font-medium leading-none">
                            <svg className="brand-react mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3"></circle>
                            </svg>
                            <a className="group" href={source} target="_blank">
                              Source Code
                            </a>
                          </span>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }),
    [],
  );

  const sliderStyle = isMobile
    ? {
        '--slider-height-percentage': '140%',
      }
    : {};

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check Out My Recent Work</h2>
        <AwesomeSlider animation="cubeAnimation" className="aws-btn" style={sliderStyle}>
          {memoizedPortfolioItems}
        </AwesomeSlider>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
