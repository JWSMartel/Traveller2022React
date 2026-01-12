export function RouteList({ routes }) {
  if (!routes || routes.length === 0) {
    return <p>No Routes</p>;
  }
  return (
    <ul>
      {routes.map((route, i) => (
        <li key={i} className="route-li">
          route {route.formatRoute}
        </li>
      ))}
    </ul>
  );
}
