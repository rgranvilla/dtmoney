import { GenIcon } from 'react-icons/lib';

export function DtClose(props) {
  return GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 40 40',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z',
        },
      },
    ],
  })(props);
}
export function DtIncome(props) {
  return GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 40 40',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 3.33335C10.7952 3.33335 3.33329 10.7953 3.33329 20C3.33329 29.2048 10.7952 36.6667 20 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33335 20 3.33335Z',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M26.6666 20L20 13.3333L13.3333 20',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M20 26.6667L20 13.3334',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
    ],
  })(props);
}
export function DtOutcome(props) {
  return GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 40 40',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 36.6667C29.2048 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33332 20 3.33332C10.7953 3.33331 3.33337 10.7952 3.33337 20C3.33337 29.2047 10.7953 36.6667 20 36.6667Z',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M13.3334 20L20 26.6667L26.6667 20',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M20 13.3333L20 26.6666',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
    ],
  })(props);
}
export function DtTotal(props) {
  return GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 40 40',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 1.66669V38.3334',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M28.3333 8.33334H15.8333C14.2862 8.33334 12.8025 8.94793 11.7085 10.0419C10.6146 11.1359 10 12.6196 10 14.1667C10 15.7138 10.6146 17.1975 11.7085 18.2915C12.8025 19.3854 14.2862 20 15.8333 20H24.1667C25.7138 20 27.1975 20.6146 28.2915 21.7086C29.3854 22.8025 30 24.2862 30 25.8333C30 27.3804 29.3854 28.8642 28.2915 29.9581C27.1975 31.0521 25.7138 31.6667 24.1667 31.6667H10',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
    ],
  })(props);
}
export function DtLogo(props) {
  const { fill, stroke } = props;
  return GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 40 40',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M34.1422 5.85781C30.3647 2.08031 25.3422 0 20 0C14.6578 0 9.63531 2.08031 5.85781 5.85781C2.08031 9.63531 0 14.6578 0 20C0 25.3422 2.08039 30.3646 5.85781 34.1422C9.63523 37.9198 14.6578 40 20 40C25.3422 40 30.3647 37.9197 34.1422 34.1422C37.9197 30.3647 40 25.3422 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781Z',
          fill: `${stroke}`,
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M26.2858 12.5714H17.7144C16.6535 12.5714 15.6361 12.9928 14.8859 13.743C14.1358 14.4931 13.7144 15.5105 13.7144 16.5714C13.7144 17.6323 14.1358 18.6497 14.8859 19.3998C15.6361 20.15 16.6535 20.5714 17.7144 20.5714H23.4286C24.4895 20.5714 25.5069 20.9928 26.2571 21.743C27.0072 22.4931 27.4286 23.5105 27.4286 24.5714C27.4286 25.6323 27.0072 26.6497 26.2571 27.3998C25.5069 28.15 24.4895 28.5714 23.4286 28.5714H13.7144',
          fill: 'none',
          stroke: `${fill}`,
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M20.5714 8V33.1429',
          stroke: `${fill}`,
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
    ],
  })(props);
}
