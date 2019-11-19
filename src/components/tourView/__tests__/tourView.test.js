import React from 'react';
import { shallow } from 'enzyme';
import { TranslatedTourView, TourView } from '../tourView';

describe('TourView Component', () => {
  it('should render a non-connected component', () => {
    const props = {
      routeDetail: {
        routeItem: {
          title: 'Dolor sit'
        }
      }
    };

    const component = shallow(<TourView {...props} />);
    expect(component).toMatchSnapshot('non-connected');
  });

  it('should render a translated component', () => {
    const props = {
      routeDetail: {
        routeItem: {
          title: 'Lorem ipsum'
        }
      }
    };

    const component = shallow(<TranslatedTourView {...props} />);
    expect(component).toMatchSnapshot('translated');
  });

  it('should have a fallback title', () => {
    const props = {};

    const component = shallow(<TourView {...props} />);
    expect(component).toMatchSnapshot('title');
  });
});