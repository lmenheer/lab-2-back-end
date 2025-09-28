import organizationJson from "../../data/organization.json";

const Organization: React.FC = () => {
  const renderSection = (title: string, section: Record<string, string>) => (
    <div key={title}>
      <h2>{title}</h2>
      <ul>
        {Object.entries(section).map(([role, name]) => (
          <li key={role} className="role-block">
            <span className="role">{role}:</span>{" "}
            <span className="name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="orginization-chart">
      <h1>Organization Chart</h1>
      {renderSection("Executive", organizationJson.Executive)}
      {renderSection("Directors", organizationJson.Directors)}
      {renderSection("Managers", organizationJson.Managers)}
      {renderSection("Specialists", organizationJson.Specialists)}
    </div>
  );
};

export default Organization;