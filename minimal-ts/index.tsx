import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import GLib from "gi://GLib";
import { createSignal, onCleanup, start } from "gsolid";
import { Box, Button, Label, ReactiveWindow } from "gsolid/gtk4";

Gtk.init();

const loop = GLib.MainLoop.new(null, false);

const dispose = start(() => {
  let window: Gtk.Window;
  const [date, setDate] = createSignal(Date.now());
  const id = setInterval(() => setDate(Date.now()), 1000);
  onCleanup(() => clearTimeout(id));

  const dateRepresent = () => new Date(date()).toISOString();

  const openSolidJSWebSite = () => Gtk.show_uri(window, "https://solidjs.com", Gdk.CURRENT_TIME);

  const openRepository = () => Gtk.show_uri(window, "https://github.com/thislight/gsolid", Gdk.CURRENT_TIME);

  <ReactiveWindow
    ref={window!}
    open={true}
    onCloseRequest={() => {
      dispose();
      loop.quit(); // We must quit the loop so the application can exit
      return true;
    }}
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
  </ReactiveWindow>;
});

loop.run();
