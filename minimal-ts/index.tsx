import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import { createSignal, onCleanup } from "gsolid";
import { Box, Button, Label, ReactiveWindow, createApp } from "gsolid/gtk4";

const app = createApp((app) => {
  let window: Gtk.Window;
  const [date, setDate] = createSignal(Date.now());
  const id = setInterval(() => setDate(Date.now()), 1000);
  onCleanup(() => clearTimeout(id));

  const dateRepresent = () => new Date(date()).toISOString();

  const openSolidJSWebSite = () => Gtk.show_uri(window, "https://solidjs.com", Gdk.CURRENT_TIME);

  const openRepository = () => Gtk.show_uri(window, "https://github.com/thislight/gsolid", Gdk.CURRENT_TIME);

  app.add_window(<ReactiveWindow
    ref={window!}
    open={true}
    onCloseRequest={() => false}
    defaultHeight={250}
    defaultWidth={250}
    title="Welcome to GSolid!"
  >
    <Box
      halign={Gtk.Align.CENTER}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
      spacing={8}
    >
      <Label
        halign={Gtk.Align.CENTER}
        valign={Gtk.Align.CENTER}
        label={`Current Time: ${dateRepresent()}`}
      />
      <Label label="Your application is started!" />
      <Label label="Most primitives in GSolid works like in SolidJS. Starts there if you are fresh." />
      <Label label="We also have some documents to describe the difference in GSolid. Check our repository!" />
      <Box halign={Gtk.Align.CENTER} spacing={4}>
        <Button label="SolidJS Website" onClicked={openSolidJSWebSite} />
        <Button label="GSolid Repository" onClicked={openRepository}/>
      </Box>
    </Box>
  </ReactiveWindow> as Gtk.Window);
}, { application_id: "org.example.MyApp" });

export default function (args?: string[]){
  return app.run(args)
}
