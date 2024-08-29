import React from "react";
import {Details} from "@/entities/job";
import {HomeIcon, BriefcaseIcon, IdentificationIcon, CurrencyEuroIcon} from "@heroicons/react/16/solid";


interface Props {
  details: Details;
}

export default function JobDetails(props: Props) {

  return (
    <div className="flex items-center gap-x-2 text-sm text-gray-600">
      {props.details && props.details.acceptRemote && (
        <span
          title={'Accepts remote work'}
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <HomeIcon className="size-4"/>
          {props.details.acceptRemote}
        </span>
      )}
      {props.details && props.details.salary && (
        <span
          title={'Salary'}
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <CurrencyEuroIcon className='size-4'/>
          {props.details.salary}
          {props.details.currency ? ` ${props.details.currency}` : ''}
        </span>
      )}
      {props.details && props.details.requiredExperiencePro && (
        <span
          title={'Required experience (professional)'}
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <BriefcaseIcon className="size-4"/>
          {props.details.requiredExperiencePro}
        </span>
      )}
      {props.details && props.details.requiredExperience && (
        <span
          title={'Required experience (educational)'}
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <IdentificationIcon className="size-4"/>
          {props.details.requiredExperience}
        </span>
      )}
    </div>
  )
}
