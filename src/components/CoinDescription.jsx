import {connect} from "react-redux"

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails.details,
})

function createMarkup({coinDetails}) {
  return { __html: `${coinDetails.data.description.en}`};
}

function CoinDescription({coinDetails}) {
  return <p dangerouslySetInnerHTML={createMarkup({coinDetails})} />;
}

export default connect(mapStateToProps)(CoinDescription)