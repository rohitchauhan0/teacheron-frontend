
import { StepProvider } from "@/context/step_context";
import StepTopbar from "./_components/stepTopbar";
import { FormProvider } from "@/context/step_data_context";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StepProvider>
            <FormProvider>
                <div className=' max-w-screen-xl mx-auto flex flex-col space-y-3'>
                    <StepTopbar />
                    {children}
                </div>
            </FormProvider>
        </StepProvider>
    );
}
