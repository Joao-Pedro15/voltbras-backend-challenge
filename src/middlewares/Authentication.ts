import {AuthChecker} from "type-graphql";
import {verify} from "jsonwebtoken";

interface Context {
  token?: string;
}

const Authentication: AuthChecker<Context> = ({ context }): boolean => {
  const authHeader = context.token;

  if(!authHeader) {
    return false;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, String(process.env.SECRET))

    return !!decoded;
  } catch {
    return false;
  }
}

export default Authentication;
