import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

const NotConnected = () => {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please connect wallet to DApp.
      </AlertDescription>
    </Alert>
  )
}

export default NotConnected