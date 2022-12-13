import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Count = ({ amount }: { amount: number }) => {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <CountUp start={0} end={amount}>
        {({ countUpRef, start }) => {
          if (inView && !viewed) {
            start();
            setViewed(true);
          }
          return <span ref={countUpRef} />;
        }}
      </CountUp>
    </div>
  );
};

export default Count;
