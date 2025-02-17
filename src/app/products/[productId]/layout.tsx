const ComponentName = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
};

export default ComponentName;

// first this layout is replace with root layout file, so first root layout will render then it will check whether their layout page exist or not if exist then it will over write or ignored(root layout)
