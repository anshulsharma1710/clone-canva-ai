import { 
  ActiveTool,
  animations, 
  Editor,
} from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface AnimationSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
};

export const AnimationSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: AnimationSidebarProps) => {
  const value = editor?.getActiveAnimation();
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "animation" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Animations"
        description="Apply an animation to the selected object"
      />
      <ScrollArea>
        <div className="p-4 space-y-1 border-b">
          {animations.map((animation) => (
            <Button
              key={animation}
              variant="secondary"
              size="lg"
              className={cn(
                "w-full h-16 justify-start text-left",
                value === animation && "border-2 border-blue-500",
              )}
                        
              onClick={() => editor?.changeAnimation(animation)}
            >
              {animation}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
function getActvieAnimation() {
  throw new Error("Function not implemented.");
}
