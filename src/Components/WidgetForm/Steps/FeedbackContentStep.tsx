import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButtom } from "../../CloseButtom"
interface FeedbackContentStepProps {
  feedbackType : FeedbackType;
  onFeedbackRestartRequest: () => void;
}
export  function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest
} : FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return ( 
    <>
      <header className="text-xl leading-6 flex items-center gap-2">
        <button>
          <ArrowLeft 
            type="button" 
            className=" top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 "
            onClick={onFeedbackRestartRequest}
          />
        </button>
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
        <span className="text-xl leading-6" > {feedbackTypeInfo.tile} </span>
        <CloseButtom />
      </header>
      <form className=" my-4 w-full">
        <textarea 
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo">

        </textarea>
        <footer className="flex gap-2 mt-2">
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Enviar Feedback
        </button>
        </footer>
      </form>
    </>
  )
}