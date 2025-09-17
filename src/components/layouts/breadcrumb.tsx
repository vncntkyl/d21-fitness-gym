import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { decodeFromUrl, formatText } from "@/lib/format";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split("/").slice(2);
    if (!paths || paths.length === 0) {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        );
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((path, index) => {
                    const decodedPath = decodeURIComponent(path);
                    const isLast = index === paths.length - 1;
                    const to = "/admin/" + paths.slice(0, index + 1).join("/");
                    let decodedHash = '';
                    const url = decodeFromUrl(decodedPath);
                    decodedHash = url;
                    return (
                        <Fragment key={path}>
                            <BreadcrumbItem className="capitalize">
                                {isLast ? (
                                    formatText(decodedHash)
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={to}>{formatText(decodedHash)}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index > 1 || !isLast && <BreadcrumbSeparator />}
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
