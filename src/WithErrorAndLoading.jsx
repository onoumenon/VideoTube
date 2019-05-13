import React from "react";

function WithErrorAndLoading(loading, error, WrappedComponent) {
  if (loading) {
    return <div>loading...</div>;
  } else {
    if (!error) {
      return WrappedComponent;
    }
    return <div>Error fetching videos. Please try again.</div>;
  }
}

export default WithErrorAndLoading;
