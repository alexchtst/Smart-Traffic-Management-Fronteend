import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export function SummaryPanel() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-[5vw] md:text-[2vw]">
            Pick Hour Vehicle Count
          </CardTitle>
          <CardDescription>
            Statistik jumlah kendaraan yang melintas berdasarkan jam pilihan.
            Gunakan data ini untuk analisis lalu lintas dan perencanaan
            transportasi.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-[1vw]">
          <Label>
            Data ini menunjukkan rata-rata kendaraan yang melintas pada jam
            sibuk pagi hari (06:00 - 09:00).
          </Label>
          <Separator className="my-4" />

          <Label>
            Grafik berikut menampilkan tren volume kendaraan selama jam kerja
            (09:00 - 17:00), cocok untuk kebutuhan pengaturan lampu lalu lintas.
          </Label>
          <Separator className="my-4" />

          <Label>
            Waktu malam (20:00 - 23:00) menunjukkan penurunan signifikan dalam
            lalu lintas, berguna untuk maintenance jalan dan patroli.
          </Label>
        </CardContent>
      </Card>
    </div>
  );
}
