import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import SEO from '../common/SEO';
import { AdvancedCodeBlock } from '@/pages/document/components/AdvanceCodeBlock';
import Preview from '@/pages/document/components/Preview';
import CanvasCursor from "../cursor/common/CanvasCursor";



const CanvasCursorExample = () => {
     const codeToDisplay = ``;

     const codeToDisplayHook = ``;

     return (
          <div className="container mx-auto px-4 py-8 space-y-6">
               <SEO
                    title="Canvas Cursor"
                    description="Interactive cursor tracking component"
                    keywords={['react', 'cursor', 'interaction', 'mouse tracking']}
               />
               <Card className='border-none shadow-none'>
                    <CardHeader>
                         <CardTitle className="text-2xl">Canvas Cursor Component</CardTitle>
                         <CardDescription>
                              An interactive React component that tracks and visualizes cursor movement
                         </CardDescription>
                    </CardHeader>
                    <CardContent>

                         <Separator className="my-4" />
                         <Preview
                              title="Live Preview"
                              className="bg-neutral-50 border"
                         >
                              <CanvasCursor />
                         </Preview>
                    </CardContent>
               </Card>

               <Card className='border-none shadow-none'>
                    <CardHeader>
                         <CardTitle>Component Implementation</CardTitle>
                         <CardDescription>
                              Detailed code breakdown of the Canvas Cursor component
                         </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="space-y-4">
                              <div>
                                   <h4 className="text-lg font-semibold mb-2">
                                        Canvas Cursor Component
                                        <Badge variant="secondary" className="ml-2">TSX</Badge>
                                   </h4>
                                   <AdvancedCodeBlock
                                        code={codeToDisplay}
                                        fileName="./CanvasCursorExample.tsx"
                                        lang="typescript"
                                   />
                              </div>

                              <Separator className="my-4" />

                              <div>
                                   <h4 className="text-lg font-semibold mb-2">
                                        Custom Mouse Hook
                                        <Badge variant="secondary" className="ml-2">TS</Badge>
                                   </h4>
                                   <AdvancedCodeBlock
                                        code={codeToDisplayHook}
                                        fileName="./use-mouse.ts"
                                        lang="typescript"
                                   />
                              </div>
                         </div>
                    </CardContent>
               </Card>
          </div>
     );
};

export default CanvasCursorExample;