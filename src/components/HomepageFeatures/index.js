import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';

const FeatureList = [
  {
    title: 'Weekly Assignments',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access all your weekly assignments here. Organized by week and topic to keep you on track.
      </>
    ),
    link: '/docs/weekly-assignments/intro',   // Add the link to where you want the card to navigate
  },
  {
    title: 'See Reports',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access detailed reports and analyses to help you stay informed.
      </>
    ),
    link: '/docs/weekly-assignments/intro',  // Internal link
  },
  {
    title: 'Schedule',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Keep track of all your important dates and deadlines with our schedule.
      </>
    ),
    link: '/docs/weekly-assignments/intro',  // Internal link
  },
  {
    title: 'Kambing-Blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Read our latest blog posts and stay up-to-date with recent developments.
      </>
    ),
    link: '/docs/weekly-assignments/intro',  // Internal link
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Contribute to our open-source projects and explore the codebase on GitHub.
      </>
    ),
    href: 'https://github.com/os2xx/os/',  // External link
  },
];

function Feature({ Svg, title, description, link }) {
  const history = useHistory();

  return (
    <div
      className="col col--4 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => history.push(link)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && history.push(link)}
    >
      <div className="text-center mb-4">
        <Svg className="w-24 h-24 mx-auto" role="img" />
      </div>
      <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="py-16 bg-gray-500">
      <div className="container mx-auto">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
