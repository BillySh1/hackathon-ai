const fetchPOST = async () => {
    const res = await fetch("/proxy/sdapi/v1/loras").then((r) => r.json());
    console.log(res, "result");
  };