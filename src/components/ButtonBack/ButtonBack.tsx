import arrowLeft from '../../assets/icons/Arrow-left.svg';

export const ButtonBack = () => {
  return (
    <div className="back">
      <img src={arrowLeft} alt="back" className="back-icon" />
      <span className="back-label">Back</span>
    </div>
  );
};
