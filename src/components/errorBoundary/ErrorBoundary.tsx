import { Component, ErrorInfo, ReactNode } from "react";
import Error from "../error/Error";

interface Props {
  children: ReactNode;
}
interface State {
  error: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  state = {
    error: false,
  };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
