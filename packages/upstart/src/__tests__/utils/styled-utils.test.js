import {
  getPadding,
  getMargin,
  getRem,
  alignItems,
  alignContent,
  justifyContent,
} from '../../utils/styled-utils';
import { Theme } from '../../components';

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  left: 'left',
  right: 'right',
};

const alignmentMap = {
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
};

const { space } = Theme;

describe('Styled Utilities - getPadding', () => {
  it('should get padding values', () => {
    const result = getPadding('p-4', Theme);
    expect(result).toBe(`padding: ${getRem(space[4], 10)};`);
  });

  it('should get vertical padding values', () => {
    const result = getPadding('py-2', Theme).split(/\n[\s]+/);
    const expectedVals = [
      `padding-top: ${getRem(space[2], 10)};`,
      `padding-bottom: ${getRem(space[2], 10)};`,
    ];
    expect(result.indexOf(expectedVals[0])).toBeGreaterThan(-1);
    expect(result.indexOf(expectedVals[1])).toBeGreaterThan(-1);
  });

  it('should get horizontal padding values', () => {
    const result = getPadding('px-2', Theme).split(/\n[\s]+/);
    const expectedVals = [
      `padding-right: ${getRem(space[2], 10)};`,
      `padding-left: ${getRem(space[2], 10)};`,
    ];
    expect(result.indexOf(expectedVals[0])).toBeGreaterThan(-1);
    expect(result.indexOf(expectedVals[1])).toBeGreaterThan(-1);
  });

  it('should get top padding values', () => {
    const result = getPadding('pt-1', Theme);
    expect(result).toBe(`padding-top: ${getRem(space[1], 10)};`);
  });

  it('should get right padding values', () => {
    const result = getPadding('pr-5', Theme);
    expect(result).toBe(`padding-right: ${getRem(space[5], 10)};`);
  });

  it('should get bottom padding values', () => {
    const result = getPadding('pb-0', Theme);
    expect(result).toBe(`padding-bottom: ${getRem(space[0], 10)};`);
  });

  it('should get left padding values', () => {
    const result = getPadding('pl-6', Theme);
    expect(result).toBe(`padding-left: ${getRem(space[6], 10)};`);
  });
});

describe('Styled Utilities - getMargin', () => {
  it('should get margin values', () => {
    const result = getMargin('m-4', Theme);
    expect(result).toBe(`margin: ${getRem(space[4], 10)};`);
  });

  it('should get vertical margin values', () => {
    const result = getMargin('my-2', Theme).split(/\n[\s]+/);
    const expectedVals = [
      `margin-top: ${getRem(space[2], 10)};`,
      `margin-bottom: ${getRem(space[2], 10)};`,
    ];
    expect(result.indexOf(expectedVals[0])).toBeGreaterThan(-1);
    expect(result.indexOf(expectedVals[1])).toBeGreaterThan(-1);
  });

  it('should get horizontal margin values', () => {
    const result = getMargin('mx-2', Theme).split(/\n[\s]+/);
    const expectedVals = [
      `margin-right: ${getRem(space[2], 10)};`,
      `margin-left: ${getRem(space[2], 10)};`,
    ];
    expect(result.indexOf(expectedVals[0])).toBeGreaterThan(-1);
    expect(result.indexOf(expectedVals[1])).toBeGreaterThan(-1);
  });

  it('should get top margin values', () => {
    const result = getMargin('mt-1', Theme);
    expect(result).toBe(`margin-top: ${getRem(space[1], 10)};`);
  });

  it('should get right margin values', () => {
    const result = getMargin('mr-5', Theme);
    expect(result).toBe(`margin-right: ${getRem(space[5], 10)};`);
  });

  it('should get bottom margin values', () => {
    const result = getMargin('mb-0', Theme);
    expect(result).toBe(`margin-bottom: ${getRem(space[0], 10)};`);
  });

  it('should get left margin values', () => {
    const result = getMargin('ml-6', Theme);
    expect(result).toBe(`margin-left: ${getRem(space[6], 10)};`);
  });
});

describe('Styled Utilities - getRem', () => {
  it('should get the rem value of 0px with 10px root', () => {
    const result = getRem(0, 10);
    expect(result).toBe('0rem');
  });

  it('should get the rem value of 4px with 10px root', () => {
    const result = getRem(4, 10);
    expect(result).toBe('0.4rem');
  });

  it('should get the rem value of 8px with 10px root', () => {
    const result = getRem(8, 10);
    expect(result).toBe('0.8rem');
  });

  it('should get the rem value of 16px with 10px root', () => {
    const result = getRem(16, 10);
    expect(result).toBe('1.6rem');
  });

  it('should get the rem value of 32px with 10px root', () => {
    const result = getRem(32, 10);
    expect(result).toBe('3.2rem');
  });

  it('should get the rem value of 64px with 10px root', () => {
    const result = getRem(64, 10);
    expect(result).toBe('6.4rem');
  });

  it('should get the rem value of 128px with 10px root', () => {
    const result = getRem(128, 10);
    expect(result).toBe('12.8rem');
  });

  it('should get the rem value of 256px with 10px root', () => {
    const result = getRem(256, 10);
    expect(result).toBe('25.6rem');
  });

  it('should get the rem value of 512px with 10px root', () => {
    const result = getRem(512, 10);
    expect(result).toBe('51.2rem');
  });
});

describe('Styled Utilities - alignItems', () => {
  Object.keys(alignmentMap).map((key) => it(`should get align-items ${key} value`, () => {
    const result = alignItems(key);
    expect(result).toBe(`align-items: ${alignmentMap[key]};`);
  }));
});

describe('Styled Utilities - alignContent', () => {
  Object.keys(alignmentMap).map((key) => it(`should get align-content ${key} value`, () => {
    const result = alignContent(key);
    expect(result).toBe(`align-content: ${alignmentMap[key]};`);
  }));
});

describe('Styled Utilities - justifyContent', () => {
  Object.keys(justifyMap).map((key) => it(`should get justify-content ${key} value`, () => {
    const result = justifyContent(key);
    expect(result).toBe(`justify-content: ${justifyMap[key]};`);
  }));
});
