const users = [
    {
      id: 1,
      name: "Aman",
      city: "Pune",
    },
    {
      id: 2,
      name: "Rahul",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Abhinav",
      city: "Dehradun",
    },
  ];

  const orders = [
    {
      orderId: 101,
      userId: 1,
      productName: "iPhone 12 Pro",
    },
    {
      orderId: 102,
      userId: 1,
      productName: "iPhone 13 Pro",
    },
    {
      orderId: 103,
      userId: 1,
      productName: "iPhone 14 Pro",
    },
    {
      orderId: 104,
      userId: 2,
      productName: "Samsung S23",
    },
  ];

  const m = users.map((userData=>{
    const n = orders.filter((orderData)=>userData.id===orderData.userId)

    return {
        userId:userData.id,
        name:userData.name,
        orders:n.map((ndata)=>{
            return {
                orderID:ndata.orderId,
                productName:ndata.productName
            }
        })
    }
  })) 
  console.log(m)