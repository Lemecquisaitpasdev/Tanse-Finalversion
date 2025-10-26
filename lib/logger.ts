import pino from "pino";

// Create logger instance with conditional pretty printing
export const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport:
    process.env.NODE_ENV !== "production"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "HH:MM:ss",
            ignore: "pid,hostname",
          },
        }
      : undefined,
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
});

/**
 * Log levels:
 * - logger.trace() - very detailed debugging
 * - logger.debug() - debugging information
 * - logger.info() - general informational messages
 * - logger.warn() - warning messages
 * - logger.error() - error messages
 * - logger.fatal() - fatal errors (app crash)
 *
 * Examples:
 *
 * logger.info({ userId: 123, action: 'checkout' }, 'User started checkout');
 * logger.error({ err, email }, 'Failed to send email');
 * logger.warn({ ip }, 'Rate limit exceeded');
 */
