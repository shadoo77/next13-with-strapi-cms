import Test from './Test';

export default function About(props: any) {
  const {
    params: { lng }
  } = props;

  return <Test lng={lng} />;
}
