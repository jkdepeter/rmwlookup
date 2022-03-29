// import * as React from 'react';
// import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Title from './Title';


// import { set } from 'lodash';
// import { ComponentLoader } from 'react-imported-component';

// // Generate Order Data
// // function createData(id, date, name, shipTo, paymentMethod, amount) {
// //   return { id, date, name, shipTo, paymentMethod, amount };
// // }




// // const rows = [
// //   createData(
// //     0,
// //     '16 Mar, 2019',
// //     'Elvis Presley',
// //     'Tupelo, MS',
// //     'VISA ⠀•••• 3719',
// //     312.44,
// //   ),
// //   createData(
// //     1,
// //     '16 Mar, 2019',
// //     'Paul McCartney',
// //     'London, UK',
// //     'VISA ⠀•••• 2574',
// //     866.99,
// //   ),
// //   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
// //   createData(
// //     3,
// //     '16 Mar, 2019',
// //     'Michael Jackson',
// //     'Gary, IN',
// //     'AMEX ⠀•••• 2000',
// //     654.39,
// //   ),
// //   createData(
// //     4,
// //     '15 Mar, 2019',
// //     'Bruce Springsteen',
// //     'Long Branch, NJ',
// //     'VISA ⠀•••• 5919',
// //     212.79,
// //   ),
// // ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Products(props) {
  
//  const [productId,setProductId] = React.useState("")
 

//  function getProductID(event){
//   console.log("current target id",event.currentTarget.id)
//   const ProductID = event.currentTarget.id
//   setProductId(ProductID)
// }

 
  
//   return (
//     <React.Fragment>
//       <Title>Products </Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Product Name</TableCell>
//             <TableCell>Product Description </TableCell>
//             <TableCell>Product Code</TableCell>
//             <TableCell>Product Color</TableCell>
            
//             <TableCell align="right">Sale Amount</TableCell>
//           </TableRow>
//           <TableRow>
         
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.product.map((product) => (
//             <TableRow 
//             id={product[3]}
//             key={product[0]}
//             onClick={getProductID}
//             >
//               <TableCell>{product[1]}</TableCell>
//               <TableCell>{product[2]}</TableCell>
//               <TableCell>{product[3]}</TableCell>
//               <TableCell>{product[4]}</TableCell>
//               <TableCell align="right">{product[4]}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link>
//     </React.Fragment>
//   );
// }