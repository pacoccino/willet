import React from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

export default function TopMenu() {
  return (
    <div>
      <Link to={routes.Root}>Root</Link>
      <Link to={routes.Account}>Account</Link>
    </div>
  );
}
