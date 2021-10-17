import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails.details,
});

function createMarkup({ coinDetails }) {
  return { __html: `${coinDetails.data.description.en}` };
}

function CoinDescription({ coinDetails }) {
  return (
    <>
      {coinDetails.data.description.en.length > 1 ? (
        <p dangerouslySetInnerHTML={createMarkup({ coinDetails })} />
      ) : (
        <p>N/A</p>
      )}
    </>
  );
}

export default connect(mapStateToProps)(CoinDescription);
