export default function CatchAllSegment({ params }: any) {
  return (
    <div>
      <div>Hello</div>
      {JSON.stringify(params.folderId)}
    </div>
  );
}
