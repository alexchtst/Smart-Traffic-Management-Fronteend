import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RegionDeviceTable() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Region and Device</CardTitle>
        <CardDescription>
          Ex eiusmod duis fugiat ullamco nostrud dolore nostrud qui.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-5">
        <Table>
          <TableCaption>Recorded Devices and Region</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Crowd</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 1</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total Device</TableCell>
              <TableCell>12</TableCell>
              <TableCell>Totla Region</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
