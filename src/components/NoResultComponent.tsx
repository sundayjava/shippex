export default function NoResultComponent(props: {
  image: string;
  headline?: string;
  subheadline?: string;
  requireRefresh: boolean;
  onRetry?: () => void;
}) {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="text-center mt-[40px]">
        <h1 className="text-[24px] font-bold text-black mb-2">
          {props.headline}
        </h1>
        <p className="text-[14px] font-normal text-[#6B7280] leading-5">
          {props.subheadline}
        </p>
        {props.requireRefresh && props.onRetry ? (
          <p
            onClick={props.onRetry}
            className="mt-[20px] text-[15px] text-shipping-secondary font-semibold cursor-pointer hover:underline"
          >
            Retry
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
