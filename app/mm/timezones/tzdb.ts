import $ from "dax-sh";
type Res = {
  zones: [
    {
      id: string;
      aliases: string[];
    }
  ];
};
const ianaVersion: string = "2024b";
// fetch data
const res: Res = await $.request(
  `https://nodatime.org/TimeZones?version=${ianaVersion}&format=json`
).json();
// collect tz names
const aa: string[] = [];
for (const zone of res.zones) {
  aa.push(zone.id);
  aa.push(...zone.aliases);
}
// make sure its string to join because of "/"
const zz = aa.map((i) => `"${i}"`);
const cc = zz.join(" | ");
const _bb = `export type TimeZones = ${cc}`;
