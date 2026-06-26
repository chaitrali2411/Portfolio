export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary" />
        <p className="text-xs text-muted">Loading</p>
      </div>
    </div>
  );
}
