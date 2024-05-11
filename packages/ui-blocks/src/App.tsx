import Tabs from "./components/Tabs/Tabs";

const tabs = [
  {
    id: "1",
    title: "First Tab",
  },
  {
    id: "2",
    title: "Second Tab",
  },
  {
    id: "3",
    title: "Third Tab",
  },
];

export default function App() {
  return (
    <div style={{ maxWidth: "50%", minHeight: "100vh" }}>
      <Tabs tabs={tabs}>
        <Tabs.Tab tab="1">
          <span>Contnet from 1</span>
        </Tabs.Tab>
        <Tabs.Tab tab="2">
          <span>Contnet from 2</span>
        </Tabs.Tab>
        <Tabs.Tab tab="3">
          <span>Contnet from 3</span>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
