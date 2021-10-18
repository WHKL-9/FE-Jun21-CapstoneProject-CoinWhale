import React from "react"
import ContentLoader from "react-content-loader"

const TwitterLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={550}
    height={550}
    viewBox="0 0 500 450"
    backgroundColor="#2e2e2e"
    foregroundColor="#fafafa"
    {...props}
  >
    <rect x="55" y="29" rx="3" ry="3" width="410" height="6" /> 
    <rect x="55" y="48" rx="3" ry="3" width="380" height="6" /> 
    <rect x="55" y="9" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="28" cy="20" r="20" /> 

    <rect x="55" y="110" rx="3" ry="3" width="410" height="6" /> 
    <rect x="55" y="129" rx="3" ry="3" width="380" height="6" /> 
    <rect x="55" y="90" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="28" cy="101" r="20" /> 

    <rect x="55" y="191" rx="3" ry="3" width="410" height="6" /> 
    <rect x="55" y="210" rx="3" ry="3" width="380" height="6" /> 
    <rect x="55" y="171" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="28" cy="182" r="20" /> 

    <rect x="55" y="272" rx="3" ry="3" width="410" height="6" /> 
    <rect x="55" y="291" rx="3" ry="3" width="380" height="6" /> 
    <rect x="55" y="252" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="28" cy="263" r="20" /> 

    <rect x="55" y="353" rx="3" ry="3" width="410" height="6" /> 
    <rect x="55" y="372" rx="3" ry="3" width="380" height="6" /> 
    <rect x="55" y="333" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="28" cy="344" r="20" /> 
  </ContentLoader>
)

export default TwitterLoader