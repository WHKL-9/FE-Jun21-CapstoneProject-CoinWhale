import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    coins: state.coins.results.data,
})

function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default connect(mapStateToProps)(MyComponent)